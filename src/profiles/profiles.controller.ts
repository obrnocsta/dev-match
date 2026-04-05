import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  // GET /profiles
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.profilesService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    try {
      return this.profilesService.update(id, updateProfileDto);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    try {
      this.profilesService.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
