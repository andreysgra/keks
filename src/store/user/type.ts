import {TUser} from '../../types/user';
import {RequestStatus} from '../../services/api/const';

export type TUserState = {
  user: TUser | null;
  registrationStatus: RequestStatus;
}
