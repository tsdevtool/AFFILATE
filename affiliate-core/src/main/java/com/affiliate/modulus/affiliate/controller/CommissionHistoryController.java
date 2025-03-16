package com.affiliate.modulus.affiliate.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.affiliate.dto.response.CommissionHistoryResponse;
import com.affiliate.modulus.affiliate.service.CommissionHistoryService;
import com.affiliate.modulus.affiliate.service.CommissionRuleService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/commission-history")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class CommissionHistoryController {
    CommissionHistoryService commissionHistoryService;

    @GetMapping("/my-commission-history")
    ApiResponse<?> getMyCommissionHistory() {
        return ApiResponse.<List<CommissionHistoryResponse>>builder()
                .data(commissionHistoryService.getMyCommissionHistory())
                .build();
    }
}
