package com.affiliate.modulus.affiliate.mapper;

import com.affiliate.modulus.affiliate.dto.request.CommissionRuleCreateRequest;
import com.affiliate.modulus.affiliate.dto.request.CommissionRuleUpdateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionRuleResponse;
import com.affiliate.modulus.affiliate.entity.CommissionRule;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommissionRuleMapper {
    CommissionRule toEntity(CommissionRuleCreateRequest request);
    CommissionRuleResponse toResponse(CommissionRule entity);
    List<CommissionRuleResponse> toResponses(List<CommissionRule> entities);
    void update(@MappingTarget  CommissionRule entity, CommissionRuleUpdateRequest request);
}
