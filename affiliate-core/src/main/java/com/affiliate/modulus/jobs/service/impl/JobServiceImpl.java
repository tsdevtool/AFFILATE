package com.affiliate.modulus.jobs.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.jobs.dto.request.JobCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobResponse;
import com.affiliate.modulus.jobs.entity.Job;
import com.affiliate.modulus.jobs.mapper.JobMapper;
import com.affiliate.modulus.jobs.repository.CompanyRepository;
import com.affiliate.modulus.jobs.repository.JobRepository;
import com.affiliate.modulus.jobs.service.JobService;
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
public class JobServiceImpl implements JobService {
    JobRepository jobRepository;
    JobMapper jobMapper;
    CompanyRepository companyRepository;

    @Override
    @Transactional
    public JobResponse createJob(JobCreateRequest request) {
        Job job = jobMapper.toJob(request);
        job.setCompany(companyRepository.findById(request.getCompanyId())
                .orElseThrow(() -> new AppException(ErrorCode.COMPANY_NOT_EXISTED)));
        jobRepository.save(job);
        return jobMapper.toJobResponse(job);
    }

    @Override
    public JobResponse getJob(Long id) {
        return jobRepository.findById(id)
                .map(jobMapper::toJobResponse)
                .orElseThrow(() -> new AppException(ErrorCode.JOB_NOT_EXISTED));
    }

    @Override
    public List<JobResponse> getJobs() {
        return jobRepository.findAll().stream()
                .map(jobMapper::toJobResponse)
                .collect(Collectors.toList());
    }
}
