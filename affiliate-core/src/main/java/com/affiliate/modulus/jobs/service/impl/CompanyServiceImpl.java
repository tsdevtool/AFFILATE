package com.affiliate.modulus.jobs.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.jobs.dto.request.CompanyCreateRequest;
import com.affiliate.modulus.jobs.dto.response.CompanyResponse;
import com.affiliate.modulus.jobs.entity.Company;
import com.affiliate.modulus.jobs.mapper.CompanyMapper;
import com.affiliate.modulus.jobs.repository.CompanyRepository;
import com.affiliate.modulus.jobs.service.CompanyService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    CompanyRepository companyRepository;
    CompanyMapper companyMapper;

    @Override
    @Transactional
    public CompanyResponse createCompany(CompanyCreateRequest request) {
        Company company = companyMapper.toCompany(request);
        return companyMapper.toCompanyResponse(companyRepository.save(company));
    }

    @Override
    public CompanyResponse getCompany(Long id) {
        return companyRepository.findById(id)
                .map(companyMapper::toCompanyResponse)
                .orElseThrow(() -> new AppException(ErrorCode.COMPANY_NOT_EXISTED));
    }

    @Override
    public List<CompanyResponse> getCompanies() {
        return companyRepository.findAll().stream()
                .map(companyMapper::toCompanyResponse)
                .collect(Collectors.toList());
    }
}
