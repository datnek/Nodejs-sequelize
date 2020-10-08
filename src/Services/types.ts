const TYPES = {
    MediaService: Symbol.for("IMediaService"),
    LocalizationService: Symbol.for("ILocalizationService"),
    SecurityService: Symbol.for("ISecurityService"),
    UserService: Symbol.for("IUserService"),
    SmsService: Symbol.for("ISmsService"),
    MailingService: Symbol.for("IMailingService"),
    UtilsService: Symbol.for("IUtilsService"),
    Constant: Symbol.for("IConstant"),
    DatabaseService: Symbol.for("IDatabaseService")
};

export { TYPES };
