package com.a608.modac.model.article;

import java.time.LocalDateTime;

import com.a608.modac.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
public class ArticleResponse {
	private Long seq;
	private String title;
	private String filepath;
	private String registeredTime;
	private Byte publicType;
	private Integer viewCount;
	private Integer likeCount;
	private Integer commentCount;
	private String totalSecond;
	private User user;
	private String categoryName;

	public ArticleResponse(Article article) {
		this.seq = article.getSeq();
		this.title = article.getTitle();
		this.filepath = article.getFilepath();
		this.registeredTime = article.getRegisteredTime();
		this.publicType = article.getPublicType();
		this.viewCount = article.getViewCount();
		this.likeCount = article.getLikeCount();
		this.commentCount = article.getCommentCount();
		this.totalSecond = article.getTotalSecond();
		this.user = article.getUser();
		this.categoryName = article.getCategory().getName();
	}

}
