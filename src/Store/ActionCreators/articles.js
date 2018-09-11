import {
  ALL_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "../ActionTypes/articles";

export const allArticles = articles => ({
  type: ALL_ARTICLES,
  payload: articles
});

export const createdArticle = newArticle => ({
  type: CREATE_ARTICLE,
  payload: newArticle
});

export const updatedArticle = (articleId, article) => ({
  type: UPDATE_ARTICLE,
  payload: { articleId, article }
});

export const deletedArticle = articleId => ({
  type: DELETE_ARTICLE,
  payload: articleId
});
