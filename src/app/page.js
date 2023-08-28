"use client";
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Space,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating value={value} onChange={setValue} size="lg"></Rating>
      <Space h="xs"></Space>
      <Textarea
        minRows={3}
        label="Your review"
        placeholder="Do you enjoy eating?"
      ></Textarea>
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider mt="sm" my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={5} readOnly></Rating>
      </Group>
      <Text ta="center" color="gray">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider mt="sm" my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={5} readOnly></Rating>
      </Group>
      <Text ta="center" color="gray">
        My favourite part is pepperoni
      </Text>
      <Pagination
        mt="md"
        value={page}
        onChange={setPage}
        total={20}
        color="orange"
        position="center"
      ></Pagination>
      <Text align="center" color="dimmed" my="sm" mt="sm">
        Copyright © 2023 Pubest Ruengkum 650610798
      </Text>
    </Container>
  );
}
