package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by xiajw on 2016/6/5.
 */
public class TouchableNativeFeedbackExampleActivity  extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "TouchableNativeFeedbackExample";
    }

    @Override
    protected boolean getUseDeveloperSupport() {
        return true;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(new MainReactPackage());
    }

}
