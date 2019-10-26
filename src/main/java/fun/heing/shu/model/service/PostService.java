package fun.heing.shu.model.service;

import fun.heing.shu.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PostService extends PagingAndSortingRepository<Post, Integer> {
    Page<Post> findAllByCatAndStatus(String cat, int status, Pageable pageable);
}
