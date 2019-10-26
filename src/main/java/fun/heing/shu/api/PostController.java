package fun.heing.shu.api;

import fun.heing.shu.common.ApiReturn;
import fun.heing.shu.config.CodeConfig;
import fun.heing.shu.model.Post;
import fun.heing.shu.model.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("post")
public class PostController {
    private PostService postService;

    @Autowired
    PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("cat")
    public ApiReturn getPostByCat(HttpServletRequest httpServletRequest) {
        String cat = httpServletRequest.getParameter("cat");
        int page = Integer.parseInt(httpServletRequest.getParameter("page")) -1 ;
        int size = Integer.parseInt(httpServletRequest.getParameter("size"));

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "cretime"));
        Page<Post> postPage = this.postService.findAllByCatAndStatus(cat, CodeConfig.STATUS_POST_NORMAL, pageable);
        List<Post> postList = postPage.getContent();

        return ApiReturn.succsss(postList);
    }
}
