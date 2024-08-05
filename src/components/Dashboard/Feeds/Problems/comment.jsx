import React, { useState } from "react";
import sdgIcon from "../../../../assets/problems/send-2.svg";
import {
  openNotificationWithIcon,
  openNotificationWithIconErr,
} from "../../../common/common";
import api from "../../../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProblemsComment } from "../../../../appRedux/actions/problems";
import HeroImage from "../../../../assets/dashboard/profile/hero-logo.svg";
import { formatDate } from "../../../common/dateAndTime";
import Plike from "../../../../assets/dashboard/feeds/pLike.svg";
import Pdislike from "../../../../assets/dashboard/feeds/pdislike.svg";

export const SinglePostComment = (props) => {
  const dispatch = useDispatch();
  const userD = useSelector((state) => state.userProfile.userD);
  const [comment, setComment] = useState("");

  const problemComments = useSelector((state) => state.problems?.comments);

  const handleComment = async (id) => {
    // props.setIsLoading(true);

    const now = new Date();

    const payload = {
      id: props.postId,
      user_full_name: userD?.full_name,
      user_image: userD?.image,
      content: comment,
      created_at: now.toISOString(),
      //   likes: 0,
      //   dislikes: 0,
    };

    try {
      const response = await api.post(
        `/problems/${props.postId}/comments/`,
        payload
      );
      setComment("");
      console.log(response);
      openNotificationWithIcon("Success", "Comment", "success");
      props.handlefetchProblemData();
      dispatch(fetchProblemsComment(props.postId));
      //   props.setIsLoading(false);
    } catch (error) {
      console.log(error);
      setComment("");
      dispatch(fetchProblemsComment(props.postId));
      props.handlefetchProblemData();

      openNotificationWithIconErr("Error", "Comment", "error");
      //   props.setIsLoading(false);
    }
  };

  const handleLike = async (id) => {
    // props.setIsLoading(true);
    try {
      const response = await api.post(`/comments/${id}/like/`);
      console.log(response);
      openNotificationWithIcon("Success", "Like", "success");
      dispatch(fetchProblemsComment(props.postId));
    } catch (error) {
      console.log(error);
      openNotificationWithIconErr("Error", "Upvote", "error");
    }
  };

  const handleDisLike = async (id) => {
    // props.setIsLoading(true);
    try {
      const response = await api.post(`/comments/${id}/dislike/`);

      openNotificationWithIcon("Success", "Dislike", "success");
      dispatch(fetchProblemsComment(props.postId));
    } catch (error) {
      console.log(error);
      openNotificationWithIconErr("Error", "Downvote", "error");
    }
  };

  return (
    <div className="w-full mt-4">
      <div className=" w-full flex items-center justify-between border-[0.95px] rounded-md border-[#0B0A0A] py-2 px-4">
        <textarea
          name="text"
          id=""
          placeholder="Share an idea on this problem"
          className="resize-none w-full outline-none rounded-md focus:bg-inputBg p-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            handleComment();
          }}
        >
          <img src={sdgIcon} alt="" />
          Post
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {problemComments
          ?.slice()
          .reverse()
          ?.map((comment) => {
            return (
              <div
                key={comment.id}
                className="bg-[#EFF6F2] w-full p-4 rounded-md text-[#3D433F]"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={comment.user_image ? comment.user_image : HeroImage}
                    alt=""
                    className=" w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                  />
                  <p className="text-[13px] lg:text-[14px] font-semibold">
                    {comment.user_full_name}
                  </p>

                  <p className="text-[11px] lg:text-[12px] text-[#979797]">
                    {formatDate(comment.created_at)}
                  </p>
                </div>

                <p className="text-sm mt-6">{comment.content}</p>

                <div className="flex gap-12 items-center mt-6 border-t border-inputBorder pt-4">
                  <div
                    className="flex cursor-pointer items-center gap-1 text-sm text-[#474747]"
                    onClick={() => {
                      handleLike(comment.id);
                    }}
                  >
                    <img src={Plike} alt="" className="h-4 w-4" />
                    {comment.likes}
                  </div>
                  <div
                    className="flex cursor-pointer items-center gap-1 text-sm text-[#474747]"
                    onClick={() => {
                      handleDisLike(comment.id);
                    }}
                  >
                    <img src={Pdislike} alt="" className="h-4 w-4" />
                    {comment.dislikes}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
