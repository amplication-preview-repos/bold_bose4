import * as graphql from "@nestjs/graphql";
import { BusinessResolverBase } from "./base/business.resolver.base";
import { Business } from "./base/Business";
import { BusinessService } from "./business.service";

@graphql.Resolver(() => Business)
export class BusinessResolver extends BusinessResolverBase {
  constructor(protected readonly service: BusinessService) {
    super(service);
  }
}
