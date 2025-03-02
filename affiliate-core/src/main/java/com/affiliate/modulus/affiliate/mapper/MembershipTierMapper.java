package com.affiliate.modulus.affiliate.mapper;

import com.affiliate.modulus.affiliate.dto.request.MembershipTierCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.MembershipTierUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.MembershipTierResponse;
import com.affiliate.modulus.affiliate.entity.MembershipTier;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MembershipTierMapper {
    MembershipTier toEntity(MembershipTierCreateRequest request);
    MembershipTierResponse toResponse(MembershipTier entity);
    List<MembershipTierResponse> toResponses(List<MembershipTier> entity);
    void update(@MappingTarget MembershipTier entity, MembershipTierUpdateRequest request);
}
