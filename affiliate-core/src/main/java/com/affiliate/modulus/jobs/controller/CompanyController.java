package com.affiliate.modulus.jobs.controller;

import com.affiliate.dto.ApiResponse;
import com.affiliate.modulus.jobs.dto.request.CompanyCreateRequest;
import com.affiliate.modulus.jobs.dto.response.CompanyResponse;
import com.affiliate.modulus.jobs.service.CompanyService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@SecurityRequirement(name = "bearerAuth")
@Slf4j
public class CompanyController {
    CompanyService companyService;

    @PostMapping
    ApiResponse<CompanyResponse> create(@RequestBody CompanyCreateRequest request) {
        return ApiResponse.<CompanyResponse>builder()
                .data(companyService.createCompany(request))
                .build();
    }

    @GetMapping("/{id}")
    ApiResponse<CompanyResponse> get(@PathVariable Long id) {
        return ApiResponse.<CompanyResponse>builder()
                .data(companyService.getCompany(id))
                .build();
    }

    @GetMapping
    ApiResponse<List<CompanyResponse>> getAll() {
        return ApiResponse.<List<CompanyResponse>>builder()
                .data(companyService.getCompanies())
                .build();
    }
}
