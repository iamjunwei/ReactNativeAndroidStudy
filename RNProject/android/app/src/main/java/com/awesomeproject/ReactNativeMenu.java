package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

/**
 * Created by xiajw on 2016/6/1.
 */
public class ReactNativeMenu extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ListView listView = new ListView(this);
        setContentView(listView);
        final ArrayAdapter<Item> adapter = new ArrayAdapter<Item>(this, android.R.layout.simple_list_item_1);
        listView.setAdapter(adapter);
        adapter.add(new Item("Movie", new Intent(this, MovieActivity.class), -1));
        adapter.add(new Item("Image", new Intent(this, ImageExampleActivity.class), -1));
        adapter.add(new Item("DrawerLayout", new Intent(this, DrawerLayoutExampleActivity.class), -1));
        adapter.add(new Item("ListView", new Intent(this, ListExampleActivity.class), -1));
        adapter.add(new Item("TouchableHighlight", new Intent(this, TouchableHighLightExampleActivity.class), -1));
        adapter.add(new Item("TouchableOpacity", new Intent(this, TouchableOpacityExampleActivity.class), -1));
        adapter.add(new Item("TouchableNativeFeedback", new Intent(this, TouchableNativeFeedbackExampleActivity.class), -1));
        adapter.add(new Item("ViewPager", new Intent(this, ViewPagerExampleActivity.class), -1));
        adapter.add(new Item("MyMenu", new Intent(this, MyMenuActivity.class), -1));
        adapter.add(new Item("TabHost", new Intent(this, TabHostExampleActivity.class), -1));
        adapter.add(new Item("LayoutViewExample", new Intent(this, LayoutViewExampleActivity.class), -1));
        adapter.add(new Item("InteractBetweenJSAndNative", new Intent(this, InteractBetweenJSAndNative.class), 1));
        adapter.add(new Item("FlightInquire", new Intent(this, FlightInquireActivity.class), 1));
        adapter.add(new Item("FetchData", new Intent(this, FetchDataActivity.class), 1));
        adapter.add(new Item("ScoreView", new Intent(this, AtyScoreView.class), 1));
        adapter.add(new Item("MessionCard", new Intent(this, AtyMessionCard.class), 1));
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Item item = adapter.getItem(position);
                if (item.requestCode < 0) {
                    startActivity(item.intent);
                } else {
                    item.intent.putExtra("content", "This is from Native");
                    startActivityForResult(item.intent, item.requestCode);
                }
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1) {
            if (resultCode == RESULT_OK) {
                Toast.makeText(this, data.getStringExtra("content"), Toast.LENGTH_SHORT).show();
            }
        }
    }

    class Item {
        Intent intent;
        String name;
        int requestCode;
        Item(String name, Intent intent, int requestCode) {
            this.name = name;
            this.intent = intent;
            this.requestCode = requestCode;
        }

        @Override
        public String toString() {
            return name;
        }
    }
}
