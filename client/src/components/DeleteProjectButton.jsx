import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";

function DeleteProjectButton({projectId}) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId
    },
    onCompleted: () => navigate('/'),
    refetchQueries:[{qyuery: GET_PROJECTS}],
  });

  return (
    <div className="d-flex justify-content-end mt-5">
      <button className="btn btn-danger m2" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
}

export default DeleteProjectButton;
