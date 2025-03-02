package com.affiliate.modulus.affiliate.service;

import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionHistoryResponse;
import com.affiliate.modulus.affiliate.entity.CommissionHistory;

import java.util.List;

public interface CommissionHistoryService {
    void createCommissionHistory(CommissionHistoryCreateRequest request);
    List<CommissionHistoryResponse> getCommissionHistoryByUserId(String userId);
}
