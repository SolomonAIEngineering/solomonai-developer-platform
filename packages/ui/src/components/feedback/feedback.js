"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackComponent = void 0;
const react_1 = __importDefault(require("react"));
const react_canny_1 = require("react-canny");
const zod_1 = require("zod");
const tabs_1 = require("../tabs");
const UserSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1),
    userName: zod_1.z.string().min(1),
    email: zod_1.z.string().email(), // This ensures the email is in a proper format.
    avatarUrl: zod_1.z.string(),
});
const FeedbackSchema = zod_1.z.object({
    featureRequestBoardToken: zod_1.z.string(),
    feedbackBoardToken: zod_1.z.string(),
    appId: zod_1.z.string(),
    ssoToken: zod_1.z.string(),
});
const TabContent = ({ boardToken, ssoToken, user, appId }) => (<react_canny_1.CannyProvider appId={appId} user={user}>
    <react_canny_1.CannyFeedback basePath="/feedback" boardToken={boardToken} ssoToken={ssoToken}/>
  </react_canny_1.CannyProvider>);
const FeedbackComponent = ({ feedbackMetadata, user, }) => {
    // validate both the user and the feedback metadata
    try {
        FeedbackSchema.parse(feedbackMetadata);
        UserSchema.parse(user);
    }
    catch (error) {
        console.error(error);
        return null;
    }
    const { feedbackBoardToken, featureRequestBoardToken, ssoToken, appId } = feedbackMetadata;
    const { userId, userName, email, avatarUrl } = user;
    return (<div>
      <tabs_1.Tabs defaultValue="feedback" className="w-full">
        <tabs_1.TabsList>
          <tabs_1.TabsTrigger value="feedback">Feedback</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="feature-requests">Feature Requests</tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="feedback">
          <TabContent boardToken={feedbackBoardToken} ssoToken={ssoToken} user={{
            id: userId,
            name: userName,
            email: email,
            avatarURL: avatarUrl,
        }} appId={appId}/>
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="feature-requests">
          <TabContent boardToken={featureRequestBoardToken} ssoToken={ssoToken} user={{
            id: userId,
            name: userName,
            email: email,
            avatarURL: avatarUrl,
        }} appId={appId}/>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>
    </div>);
};
exports.FeedbackComponent = FeedbackComponent;
