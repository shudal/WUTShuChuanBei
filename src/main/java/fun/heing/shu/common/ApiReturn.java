package fun.heing.shu.common;

import lombok.Data;

@Data
public class ApiReturn {
    private int code;
    private String msg;
    private Object data;
    ApiReturn(int code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static ApiReturn succsss(Object data) {
        return new ApiReturn(0, "OK", data);
    }

    public static ApiReturn failure(String msg, Object data) {
        return new ApiReturn(-1, msg, data);
    }
}
