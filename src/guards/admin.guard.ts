import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Admin } from 'src/admin/admin.model';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class JwtAdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const cookie = req.cookies;
      const token = cookie.refresh_token 

      // const authHeader = req.headers.authorization;
      if (!token) {
        throw new UnauthorizedException('Authorization is not active');
      }
      // const bearer = authHeader.split(' ')[0];
      // const token = authHeader.split(' ')[1];
      // if (bearer !== 'Bearer' || !token) {
      //   throw new UnauthorizedException({
      //     message: 'Token is not exists',
      //   });
      // }
      const admin = this.jwtService.verify(token, {
        publicKey: process.env.REFRESH_TOKEN_KEY,
      });

      if (admin.is_creator) return true;
      if (admin.is_active === false) {
        throw new UnauthorizedException('Admin is not active');
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
