package com.affiliate.modulus.jobs.service;

import com.affiliate.modulus.jobs.dto.request.CompanyCreateRequest;
import com.affiliate.modulus.jobs.dto.response.CompanyResponse;

import java.util.List;

public interface CompanyService {
    CompanyResponse createCompany(CompanyCreateRequest request);
    CompanyResponse getCompany(Long id);
    List<CompanyResponse> getCompanies();
//    CompanyResponse updateCompany(Long id, CompanyCreateRequest request);
//    void deleteCompany(Long id);
}
