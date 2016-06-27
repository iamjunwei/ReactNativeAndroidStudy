package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

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
        adapter.add(new Item("Movie", new Intent(this, MovieActivity.class)));
        adapter.add(new Item("Image", new Intent(this, ImageExampleActivity.class)));
        adapter.add(new Item("DrawerLayout", new Intent(this, DrawerLayoutExampleActivity.class)));
        adapter.add(new Item("ListView", new Intent(this, ListExampleActivity.class)));
        adapter.add(new Item("TouchableHighlight", new Intent(this, TouchableHighLightExampleActivity.class)));
        adapter.add(new Item("TouchableOpacity", new Intent(this, TouchableOpacityExampleActivity.class)));
        adapter.add(new Item("TouchableNativeFeedback", new Intent(this, TouchableNativeFeedbackExampleActivity.class)));
        adapter.add(new Item("ViewPager", new Intent(this, ViewPagerExampleActivity.class)));
        adapter.add(new Item("MyMenu", new Intent(this, MyMenuActivity.class)));
        adapter.add(new Item("TabHost", new Intent(this, TabHostExampleActivity.class)));
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Item item = adapter.getItem(position);
                startActivity(item.intent);
            }
        });
    }

    class Item {
        Intent intent;
        String name;
        Item(String name, Intent intent) {
            this.name = name;
            this.intent = intent;
        }

        @Override
        public String toString() {
            return name;
        }
    }
}
