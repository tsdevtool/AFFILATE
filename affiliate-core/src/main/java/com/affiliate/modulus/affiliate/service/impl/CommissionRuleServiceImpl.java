package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionRuleResponse;
import com.affiliate.modulus.affiliate.entity.CommissionRule;
import com.affiliate.modulus.affiliate.mapper.CommissionRuleMapper;
import com.affiliate.modulus.affiliate.repository.CommissionRuleRepository;
import com.affiliate.modulus.affiliate.service.CommissionRuleService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CommissionRuleServiceImpl implements CommissionRuleService {
    CommissionRuleRepository commissionRuleRepository;
    CommissionRuleMapper commissionRuleMapper;

    @Override
    public CommissionRuleResponse create(CommissionRuleCreateRequest request) {
        CommissionRule commissionRule = commissionRuleMapper.toEntity(request);
        commissionRuleRepository.save(commissionRule);
        return commissionRuleMapper.toResponse(commissionRule);
    }

    @Override
    public void update(Integer id, CommissionRuleUpdateRequest request) {
        CommissionRule commissionRule = commissionRuleRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        commissionRuleMapper.update(commissionRule, request);

    }

    @Override
    public boolean delete(Integer id) {
        CommissionRule commissionRule = commissionRuleRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        try {
            commissionRuleRepository.delete(commissionRule);
        } catch (Exception e) {
            throw new AppException(ErrorCode.COMMISSION_RULE_CANNOT_BE_DELETED);
        }
        return true;
    }

    @Override
    public CommissionRuleResponse getById(Integer id) {
        CommissionRule commissionRule = commissionRuleRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.COMMISSION_RULE_NOT_EXISTED));
        return commissionRuleMapper.toResponse(commissionRule);
    }

    @Override
    public List<CommissionRuleResponse> getAll() {
        List<CommissionRule> commissionRules = commissionRuleRepository.findAll();
        return commissionRuleMapper.toResponses(commissionRules);
    }
}
