package com.affiliate.modulus.jobs.mapper;

import com.affiliate.modulus.jobs.dto.request.JobApplicationCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobApplicationResponse;
import com.affiliate.modulus.jobs.entity.JobApplication;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface JobApplicationMapper {
    JobApplication toJobApplication(JobApplicationCreateRequest request);
    JobApplicationResponse toResponse(JobApplication jobApplication);
}
