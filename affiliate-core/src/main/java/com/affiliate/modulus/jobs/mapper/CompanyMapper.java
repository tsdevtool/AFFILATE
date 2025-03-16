package com.affiliate.modulus.jobs.mapper;

import com.affiliate.modulus.jobs.dto.request.CompanyCreateRequest;
import com.affiliate.modulus.jobs.dto.response.CompanyResponse;
import com.affiliate.modulus.jobs.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyMapper {
    CompanyResponse toCompanyResponse(Company company);
    Company toCompany(CompanyCreateRequest request);
}
