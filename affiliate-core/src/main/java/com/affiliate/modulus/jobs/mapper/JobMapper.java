package com.affiliate.modulus.jobs.mapper;

import com.affiliate.modulus.jobs.dto.request.JobCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobResponse;
import com.affiliate.modulus.jobs.entity.Job;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface JobMapper {
    Job toJob(JobCreateRequest request);
    JobResponse toJobResponse(Job job);
}
