import { Container } from "inversify";
import { TYPES } from "./Services/types";
import {DatabaseService, IDatabaseService,} from "./Services/database.service";
import {IMailingService, MailingService} from "./Services/mailing.service";
import {ILocalizationService, LocalizationService} from "./Services/localization.service";
import {ISmsService, SmsService} from "./Services/sms.service";
import {IUserService, UserService} from "./Services/user.service";
import {ISecurityService, SecurityService} from "./Services/security.service";
import {IMediaService, MediaService} from "./Services/media.service";
import {IUtilService, UtilService} from "./Services/util.service";
import {Constant, IConstant} from "./app/constant";



const diContainer = new Container();

diContainer.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseService);
diContainer.bind<IConstant>(TYPES.Constant).to(Constant);
diContainer.bind<ILocalizationService>(TYPES.LocalizationService).to(LocalizationService);
diContainer.bind<IUserService>(TYPES.UserService).to(UserService);
diContainer.bind<ISecurityService>(TYPES.SecurityService).to(SecurityService);
diContainer.bind<IMediaService>(TYPES.MediaService).to(MediaService);
diContainer.bind<IMailingService>(TYPES.MailingService).to(MailingService);
diContainer.bind<ISmsService>(TYPES.SmsService).to(SmsService);
diContainer.bind<IUtilService>(TYPES.UtilsService).to(UtilService);

export { diContainer };
