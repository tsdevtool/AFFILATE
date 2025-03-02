package com.affiliate.modulus.affiliate.service;

import com.affiliate.modulus.affiliate.dto.request.MembershipTierCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.MembershipTierUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.MembershipTierResponse;

import java.util.List;

public interface MembershipTierService {
    MembershipTierResponse create(MembershipTierCreateRequest request);
    void update(Integer id, MembershipTierUpdateRequest request);
    boolean delete(Integer id);
    MembershipTierResponse getById(Integer id);
    List<MembershipTierResponse> getAll();
}
