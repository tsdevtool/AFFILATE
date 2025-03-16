package com.affiliate.modulus.jobs.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CompanyResponse {
    Long id;
    String name;
    String location;
    String logoUrl;
    String websiteUrl;
    String description;
    String industry;
}
