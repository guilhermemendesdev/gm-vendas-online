import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}
  @Get()
  async getAllStates(): Promise<StateEntity[]> {
    return this.stateService.getAllStates();
  }
}
