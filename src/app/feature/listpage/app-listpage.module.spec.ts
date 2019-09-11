import { AppListpageModule } from './app-listpage.module';

describe('AppListpageModule', () => {
  let appListpageModule: AppListpageModule;

  beforeEach(() => {
    appListpageModule = new AppListpageModule();
  });

  it('should create an instance', () => {
    expect(appListpageModule).toBeTruthy();
  });
});
