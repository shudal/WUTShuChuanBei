package fun.heing.shu.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name="post")
public class Post {
    @Id
    private int id;

    private int cat;
    private String title;
    private String content;
    private String cretime;

    // 积极/消极分类
    private String bincat;
    // 激昂/愤怒
    private String subcat;

    private String img;
    private String author;
    private int type;
    private String cover;

    private int status;
}
