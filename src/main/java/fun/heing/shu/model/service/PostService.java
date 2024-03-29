package fun.heing.shu.model.service;

import fun.heing.shu.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PostService extends PagingAndSortingRepository<Post, Integer> {
    Page<Post> findAllByStatus(int status, Pageable pageable);
    Page<Post> findAllByCatAndStatus(int cat, int status, Pageable pageable);
    Post getByIdAndStatus(int id, int status);
}
