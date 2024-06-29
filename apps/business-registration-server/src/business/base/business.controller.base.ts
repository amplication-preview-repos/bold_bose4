/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BusinessService } from "../business.service";
import { BusinessCreateInput } from "./BusinessCreateInput";
import { Business } from "./Business";
import { BusinessFindManyArgs } from "./BusinessFindManyArgs";
import { BusinessWhereUniqueInput } from "./BusinessWhereUniqueInput";
import { BusinessUpdateInput } from "./BusinessUpdateInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { LegalDocumentFindManyArgs } from "../../legalDocument/base/LegalDocumentFindManyArgs";
import { LegalDocument } from "../../legalDocument/base/LegalDocument";
import { LegalDocumentWhereUniqueInput } from "../../legalDocument/base/LegalDocumentWhereUniqueInput";

export class BusinessControllerBase {
  constructor(protected readonly service: BusinessService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Business })
  async createBusiness(
    @common.Body() data: BusinessCreateInput
  ): Promise<Business> {
    return await this.service.createBusiness({
      data: data,
      select: {
        address: true,
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Business] })
  @ApiNestedQuery(BusinessFindManyArgs)
  async businesses(@common.Req() request: Request): Promise<Business[]> {
    const args = plainToClass(BusinessFindManyArgs, request.query);
    return this.service.businesses({
      ...args,
      select: {
        address: true,
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async business(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    const result = await this.service.business({
      where: params,
      select: {
        address: true,
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBusiness(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() data: BusinessUpdateInput
  ): Promise<Business | null> {
    try {
      return await this.service.updateBusiness({
        where: params,
        data: data,
        select: {
          address: true,
          contactNumber: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Business })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBusiness(
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Business | null> {
    try {
      return await this.service.deleteBusiness({
        where: params,
        select: {
          address: true,
          contactNumber: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/employees")
  @ApiNestedQuery(EmployeeFindManyArgs)
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        position: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  async connectEmployees(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  async updateEmployees(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  async disconnectEmployees(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/legalDocuments")
  @ApiNestedQuery(LegalDocumentFindManyArgs)
  async findLegalDocuments(
    @common.Req() request: Request,
    @common.Param() params: BusinessWhereUniqueInput
  ): Promise<LegalDocument[]> {
    const query = plainToClass(LegalDocumentFindManyArgs, request.query);
    const results = await this.service.findLegalDocuments(params.id, {
      ...query,
      select: {
        business: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        filename: true,
        fileUrl: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/legalDocuments")
  async connectLegalDocuments(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: LegalDocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      legalDocuments: {
        connect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/legalDocuments")
  async updateLegalDocuments(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: LegalDocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      legalDocuments: {
        set: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/legalDocuments")
  async disconnectLegalDocuments(
    @common.Param() params: BusinessWhereUniqueInput,
    @common.Body() body: LegalDocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      legalDocuments: {
        disconnect: body,
      },
    };
    await this.service.updateBusiness({
      where: params,
      data,
      select: { id: true },
    });
  }
}
