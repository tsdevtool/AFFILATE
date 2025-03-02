package com.affiliate.modulus.affiliate.mapper;

import com.affiliate.modulus.affiliate.dto.request.CommissionHistoryCreateRequest;
import com.affiliate.modulus.affiliate.dto.response.CommissionHistoryResponse;
import com.affiliate.modulus.affiliate.entity.CommissionHistory;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommissionHistoryMapper {
    CommissionHistory toEntity(CommissionHistoryCreateRequest request);
    CommissionHistoryResponse toResponse(CommissionHistory entity);
    List<CommissionHistoryResponse> toResponses(List<CommissionHistory> entity);
}
