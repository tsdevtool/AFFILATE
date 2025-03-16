package com.affiliate.modulus.jobs.dto.response;

import com.affiliate.modulus.jobs.utils.JobType;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JobResponse {
    Long id;
    String title;
    String location;
    String description;
    String salary;
    JobType jobType;
    CompanyResponse company;
}
