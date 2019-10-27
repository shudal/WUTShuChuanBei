package fun.heing.shu.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name="pcatmeta")
public class Pcatmeta {
    @Id
    private int postid;

    private int poscore;
    private int negscore;
}
