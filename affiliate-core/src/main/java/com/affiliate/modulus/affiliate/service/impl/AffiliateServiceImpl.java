package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.TrackReferralRequest;
import com.affiliate.modulus.affiliate.dto.response.AffiliateResponse;
import com.affiliate.modulus.affiliate.entity.Affiliate;
import com.affiliate.modulus.affiliate.entity.CommissionRule;
import com.affiliate.modulus.affiliate.mapper.AffiliateMapper;
import com.affiliate.modulus.affiliate.repository.AffiliateRepository;
import com.affiliate.modulus.affiliate.repository.CommissionRuleRepository;
import com.affiliate.modulus.affiliate.service.AffiliateService;
import com.affiliate.modulus.affiliate.service.CommissionHistoryService;
import com.affiliate.modulus.affiliate.utils.AffiliateUtils;
import com.affiliate.modulus.affiliate.utils.Const;
import com.affiliate.modulus.auth.entity.User;
import com.affiliate.modulus.auth.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AffiliateServiceImpl implements AffiliateService {
    AffiliateRepository affiliateRepository;
    UserRepository userRepository;
    AffiliateMapper affiliateMapper;
    CommissionRuleRepository commissionRuleRepository;
    CommissionHistoryService commissionHistoryService;

    @Override
    @Transactional
    public void createAffiliate(User user, String referralCode) {
        Affiliate referralBy = affiliateRepository.findByReferralCode(referralCode).orElse(null);

        Affiliate affiliate = Affiliate.builder()
                .user(user)
                .referralCode(AffiliateUtils.generateReferralCode(user.getId()))
                .referralBy(referralBy)
                .totalCommission(BigDecimal.ZERO)
                .numberOfReferrals(0)
                .build();
        affiliateRepository.save(affiliate);
    }

    @Override
    public AffiliateResponse getAffiliateByUserId(String userId) {
        Affiliate affiliate = affiliateRepository.findByUserId(userId)
                .orElseThrow(() -> new AppException(ErrorCode.AFFILIATE_NOT_EXISTED));
        return affiliateMapper.toResponse(affiliate);
    }

    @Override
    public AffiliateResponse getMyAffiliate() {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();

        User user = userRepository.findByEmail(name).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        Affiliate affiliate = affiliateRepository.findByUserId(user.getId())
                .orElseThrow(() -> new AppException(ErrorCode.AFFILIATE_NOT_EXISTED));
        return affiliateMapper.toResponse(affiliate);
    }

    @Override
    public boolean trackReferral(TrackReferralRequest request) {
        Affiliate affiliate = affiliateRepository.findByReferralCode(request.getReferralCode())
                .orElseThrow(() -> new AppException(ErrorCode.INVALID_REFERRAL_CODE));

        CommissionRule commissionRule = commissionRuleRepository.findById(request.getCommissionRuleId())
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));

        BigDecimal commissionAmount = commissionRule.getBaseAmount().add(
                commissionRule.getIncrementAmount().multiply(
                        BigDecimal.valueOf(affiliate.getNumberOfReferrals()).divideToIntegralValue(BigDecimal.valueOf(Const.REFERRAL_INCREMENT_STEP)))
        );
        affiliate.setTotalCommission(affiliate.getTotalCommission().add(commissionAmount));
        affiliate.setNumberOfReferrals(affiliate.getNumberOfReferrals() + 1);
        affiliateRepository.save(affiliate);
        commissionHistoryService.createCommissionHistory(CommissionHistoryCreateRequest.builder()
                        .affiliate(affiliate)
                        .amount(commissionAmount)
                        .commissionRule(commissionRule)
                .build());
        return true;
    }

}
