import React from "react";

/**
 * @description 用户组件
 *
 * @param {Object} props
 *
 * @param {String} props.name 用户名
 *
 * @param {String} props.content 内容
 * */
export function User(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <div> {props.content}</div>
        </div>
    );
}