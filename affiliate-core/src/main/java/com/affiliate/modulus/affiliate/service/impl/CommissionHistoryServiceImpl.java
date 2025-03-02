package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionHistoryResponse;
import com.affiliate.modulus.affiliate.entity.CommissionHistory;
import com.affiliate.modulus.affiliate.mapper.CommissionHistoryMapper;
import com.affiliate.modulus.affiliate.repository.CommissionHistoryRepository;
import com.affiliate.modulus.affiliate.service.CommissionHistoryService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CommissionHistoryServiceImpl implements CommissionHistoryService {
    CommissionHistoryRepository commissionHistoryRepository;
    CommissionHistoryMapper commissionHistoryMapper;

    @Override
    public void createCommissionHistory(CommissionHistoryCreateRequest request) {
        commissionHistoryRepository.save(commissionHistoryMapper.toEntity(request));
    }

    @Override
    public List<CommissionHistoryResponse> getCommissionHistoryByUserId(String userId) {
        List<CommissionHistory> commissionHistories = commissionHistoryRepository.findByUserId(userId);
        return commissionHistoryMapper.toResponses(commissionHistories);
    }
}
