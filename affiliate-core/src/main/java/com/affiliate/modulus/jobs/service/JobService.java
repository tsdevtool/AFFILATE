package com.affiliate.modulus.jobs.service;

import com.affiliate.modulus.jobs.dto.request.JobCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobResponse;

import java.util.List;

public interface JobService {
    JobResponse createJob(JobCreateRequest request);
    JobResponse getJob(Long id);
    List<JobResponse> getJobs();
//    JobResponse updateJob(Long id, JobCreateRequest request);
//    void deleteJob(Long id);
}
