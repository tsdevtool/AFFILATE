package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.TrackReferralRequest;
import com.affiliate.modulus.affiliate.entity.Affiliate;
import com.affiliate.modulus.affiliate.entity.CommissionRule;
import com.affiliate.modulus.affiliate.repository.AffiliateRepository;
import com.affiliate.modulus.affiliate.repository.CommissionRuleRepository;
import com.affiliate.modulus.affiliate.service.AffiliateService;
import com.affiliate.modulus.affiliate.service.CommissionHistoryService;
import com.affiliate.modulus.affiliate.util.AffiliateUtils;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AffiliateServiceImpl implements AffiliateService {
    AffiliateRepository affiliateRepository;
    CommissionRuleRepository commissionRuleRepository;
    CommissionHistoryService commissionHistoryService;

    @Override
    public Affiliate createAffiliate(String userId) {
        Affiliate affiliate = Affiliate.builder()
                .userId(userId)
                .referralCode(AffiliateUtils.generateReferralCode(userId))
                .build();
        return affiliateRepository.save(affiliate);
    }

    @Override
    public Affiliate getAffiliateByUserId(String userId) {
        return affiliateRepository.findByUserId(userId)
                .orElseThrow(() -> new AppException(ErrorCode.AFFILIATE_NOT_EXISTED));
    }

    @Override
    public boolean trackReferral(TrackReferralRequest request) {
        Affiliate affiliate = affiliateRepository.findByReferralCode(request.getReferralCode())
                .orElseThrow(() -> new AppException(ErrorCode.INVALID_REFERRAL_CODE));

        CommissionRule commissionRule = commissionRuleRepository.findByName(request.getCommissionType())
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));

        BigDecimal commissionAmount = commissionRule.getAmount().multiply(
                BigDecimal.valueOf(affiliate.getMembershipTier().getCommissionRate())
        );
        affiliate.setTotalCommission(affiliate.getTotalCommission().add(commissionAmount));
        affiliateRepository.save(affiliate);
        commissionHistoryService.createCommissionHistory(CommissionHistoryCreateRequest.builder()
                        .affiliate(affiliate)
                        .amount(commissionAmount)
                        .commissionType(commissionRule.getName())
                .build());
        return true;
    }

}
