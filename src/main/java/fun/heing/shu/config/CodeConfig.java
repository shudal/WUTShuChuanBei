package fun.heing.shu.config;

import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class CodeConfig {
    public static CodeConfig codeConfig;
    public static int STATUS_POST_NORMAL = 1;

    public static int CAT_1 = 1;
    public static int CAT_2 = 2;
    public static int CAT_3 = 3;
    public static String CAT_1_NAME = "精选";
    public static String CAT_2_NAME = "热门";
    public static String CAT_3_NAME = "最新";

    public Map<Integer, String> catMap = new HashMap<>();
    CodeConfig() {
        codeConfig = this;
        this.codeConfig.catMap.put(CAT_1, CAT_1_NAME);
        this.codeConfig.catMap.put(CAT_2, CAT_2_NAME);
        this.codeConfig.catMap.put(CAT_3, CAT_3_NAME);
    }
    public String getCatNameFromCode(int code) {
        return this.codeConfig.catMap.get(code);
    }
    public int getCatCodeFromName(String name) {
        Iterator it = this.codeConfig.catMap.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            String value = (String)entry.getValue();
            if (value != null && value.equals(name)) {
                return (int)entry.getKey();
            }
        }
        return -1;
    }
}
