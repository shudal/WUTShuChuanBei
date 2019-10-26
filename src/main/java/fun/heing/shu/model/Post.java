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

    private int status;
}
