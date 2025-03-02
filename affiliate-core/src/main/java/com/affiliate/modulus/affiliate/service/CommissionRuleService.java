package com.affiliate.modulus.affiliate.service;

import com.affiliate.modulus.affiliate.dto.request.CommissionRuleCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionRuleResponse;
import com.affiliate.modulus.affiliate.entity.CommissionRule;

import java.util.List;

public interface CommissionRuleService {
    CommissionRuleResponse create(CommissionRuleCreateRequest request);
    void update(Integer id, CommissionRuleUpdateRequest request);
    boolean delete(Integer id);
    CommissionRuleResponse getById(Integer id);
    List<CommissionRuleResponse> getAll();
}
