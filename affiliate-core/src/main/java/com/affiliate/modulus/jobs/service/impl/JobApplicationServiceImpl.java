package com.affiliate.modulus.jobs.service.impl;

import com.affiliate.exception.AppException;
import com.affiliate.exception.ErrorCode;
import com.affiliate.modulus.auth.entity.User;
import com.affiliate.modulus.auth.repository.UserRepository;
import com.affiliate.modulus.jobs.dto.request.JobApplicationCreateRequest;
import com.affiliate.modulus.jobs.dto.response.JobApplicationResponse;
import com.affiliate.modulus.jobs.entity.JobApplication;
import com.affiliate.modulus.jobs.mapper.JobApplicationMapper;
import com.affiliate.modulus.jobs.repository.JobApplicationRepository;
import com.affiliate.modulus.jobs.service.JobApplicationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class JobApplicationServiceImpl implements JobApplicationService {
    JobApplicationRepository jobApplicationRepository;
    JobApplicationMapper jobApplicationMapper;
    UserRepository userRepository;

    @Override
    @Transactional
    public JobApplicationResponse applyJob(JobApplicationCreateRequest request) {
        var context = SecurityContextHolder.getContext();
        String name = context.getAuthentication().getName();

        User user = userRepository.findByEmail(name).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
        JobApplication jobApplication = jobApplicationMapper.toJobApplication(request);
        jobApplication.setUser(user);
        jobApplicationRepository.save(jobApplication);
        return jobApplicationMapper.toResponse(jobApplication);
    }

    @Override
    public JobApplicationResponse getJobApplication(Long id) {
        return jobApplicationRepository.findById(id)
                .map(jobApplicationMapper::toResponse)
                .orElseThrow(() -> new AppException(ErrorCode.JOB_APPLICATION_NOT_EXISTED));
    }

    @Override
    public List<JobApplicationResponse> getJobApplications() {
        return jobApplicationRepository.findAll().stream()
                .map(jobApplicationMapper::toResponse)
                .collect(java.util.stream.Collectors.toList());
    }
}
