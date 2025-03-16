package com.affiliate.modulus.affiliate.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleUpdateRequest;
import com.affiliate.modulus.affiliate.service.AffiliateService;
import com.affiliate.modulus.affiliate.service.CommissionRuleService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/commission-rule")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class CommissionRuleController {
    CommissionRuleService commissionRuleService;

    @PostMapping
    ApiResponse<?> createCommissionRule(@RequestBody CommissionRuleCreateRequest request) {
        return ApiResponse.builder()
                .data(commissionRuleService.create(request))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<?> updateCommissionRule(@PathVariable Integer id, @RequestBody CommissionRuleUpdateRequest request) {
        commissionRuleService.update(id, request);
        return ApiResponse.builder().build();
    }

    @DeleteMapping("/{id}")
    ApiResponse<?> deleteCommissionRule(@PathVariable Integer id) {
        commissionRuleService.delete(id);
        return ApiResponse.builder().build();
    }

    @GetMapping("/{id}")
    ApiResponse<?> getCommissionRule(@PathVariable Integer id) {
        return ApiResponse.builder()
                .data(commissionRuleService.getById(id))
                .build();
    }

    @GetMapping
    ApiResponse<?> getAllCommissionRules() {
        return ApiResponse.builder()
                .data(commissionRuleService.getAll())
                .build();
    }
}
