package com.affiliate.modulus.jobs.dto.request;

import lombok.Data;

@Data
public class CompanyCreateRequest {
    String name;
    String location;
    String logoUrl;
    String websiteUrl;
    String description;
    String industry;
}
