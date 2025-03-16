package com.affiliate.modulus.affiliate.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionHistoryResponse;
import com.affiliate.modulus.affiliate.entity.CommissionHistory;
import com.affiliate.modulus.affiliate.mapper.CommissionHistoryMapper;
import com.affiliate.modulus.affiliate.repository.CommissionHistoryRepository;
import com.affiliate.modulus.affiliate.service.CommissionHistoryService;
import com.affiliate.modulus.auth.entity.User;
import com.affiliate.modulus.auth.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CommissionHistoryServiceImpl implements CommissionHistoryService {
    CommissionHistoryRepository commissionHistoryRepository;
    CommissionHistoryMapper commissionHistoryMapper;
    UserRepository userRepository;

    @Override
    @Transactional
    public void createCommissionHistory(CommissionHistoryCreateRequest request) {
        commissionHistoryRepository.save(commissionHistoryMapper.toEntity(request));
    }

    @Override
    public List<CommissionHistoryResponse> getCommissionHistoryByUserId(String userId) {
        List<CommissionHistory> commissionHistories = commissionHistoryRepository.findByUserId(userId);
        return commissionHistoryMapper.toResponses(commissionHistories);
    }

    @Override
    public List<CommissionHistoryResponse> getMyCommissionHistory() {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();

        User user = userRepository.findByEmail(name).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        return getCommissionHistoryByUserId(user.getId());
    }
}
