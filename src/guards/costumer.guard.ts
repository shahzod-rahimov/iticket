import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class JwtCostumerGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly customerService: CustomerService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new UnauthorizedException('Authorization is not active');
      }
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Token is not exists',
        });
      }
      const user = this.jwtService.verify(token, {
        publicKey: process.env.ACCESS_TOKEN_KEY,
      });
      
      console.log(this.customerService.getByID(user.sub));
      if (!user.sub) {
        throw new UnauthorizedException('Costumer is unauthorized');
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
