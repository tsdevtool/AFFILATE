package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.affiliate.dto.request.MembershipTierCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.MembershipTierUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.MembershipTierResponse;
import com.affiliate.modulus.affiliate.entity.MembershipTier;
import com.affiliate.modulus.affiliate.mapper.MembershipTierMapper;
import com.affiliate.modulus.affiliate.repository.MembershipTierRepository;
import com.affiliate.modulus.affiliate.service.MembershipTierService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MembershipTierServiceImpl implements MembershipTierService {
    MembershipTierRepository membershipTierRepository;
    MembershipTierMapper membershipTierMapper;

    @Override
    public MembershipTierResponse create(MembershipTierCreateRequest request) {
        MembershipTier membershipTier = membershipTierMapper.toEntity(request);
        membershipTierRepository.save(membershipTier);
        return membershipTierMapper.toResponse(membershipTier);
    }

    @Override
    public void update(Integer id, MembershipTierUpdateRequest request) {
        MembershipTier membershipTier = membershipTierRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        membershipTierMapper.update(membershipTier, request);
        membershipTierRepository.save(membershipTier);
    }

    @Override
    public boolean delete(Integer id) {
        MembershipTier membershipTier = membershipTierRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        try {
            membershipTierRepository.delete(membershipTier);
        } catch (Exception e) {
            throw new AppException(ErrorCode.MEMBERSHIP_TIER_CANNOT_BE_DELETED);
        }
        return true;
    }

    @Override
    public MembershipTierResponse getById(Integer id) {
        MembershipTier membershipTier = membershipTierRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        return membershipTierMapper.toResponse(membershipTier);
    }

    @Override
    public List<MembershipTierResponse> getAll() {
        List<MembershipTier> membershipTiers = membershipTierRepository.findAll();
        return membershipTierMapper.toResponses(membershipTiers);
    }
}
